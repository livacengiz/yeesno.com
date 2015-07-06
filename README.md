### [yeesno.com](http://yeesno.com)
#Yes or No site generator

##Usage

##Project requirements
- Python 3.4
- Flask
- Pymongo | MongoClient
- slugify
```
Mongolab configuration
```
##Mongolab requirements
- Mongolab user
- Mongolab Database

app.py>

```
app = Flask(__name__)
mongoclient = MongoClient('mongodb://<dbuser>:<dbpassword>@ds041032.mongolab.com:41032/<dbtitle>')

dbtitle : Database title
dbuser  : Mongolab username
dbpassword : Database password

```
###Support
- [Halil Kaya](http://github.com/halilkaya)