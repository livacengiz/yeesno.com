#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask
from flask import render_template, request, redirect, abort
from pymongo import MongoClient
import re
from slugify import slugify
import datetime

app = Flask(__name__)
mongoclient = MongoClient('mongodb://<dbuser>:<dbpassword>@ds041032.mongolab.com:41032/<dbtitle>')
_punct_re = re.compile(r'[\t !"#$%&\'()*\-/<=>?@\[\\\]^_`{|},.]+')

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/<question>', methods = ['POST', 'GET'])
def voila(question):
    if request.method == 'GET':
        yorn = mongoclient.yorn.yorns.find_one({"slug": question})
        if yorn is None:
            abort(404)
        data = {
            "question": yorn['question'],
            "answer": yorn['answer'],
            "date": yorn['date']
        }
        return render_template("voila.html", data=data)
    if request.method == 'POST':
        question = request.form.get('ques')
        answer = request.form.get('answer')
        slug = slugify(request.form.get('ques')).replace('-', '') + '.com'
        date = datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d')
        data = {
            "question": question,
            "answer": answer,
            "slug": slug,
            "date": date
        }
        mongoclient.yorn.yorns.insert(data)
        return render_template ("voila.html", data=data)
    else:
        return render_template("voila.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)