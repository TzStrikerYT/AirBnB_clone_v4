# AirBnB Clone - General
<p align="center">
  <img src="https://github.com/TzStrikerYT/AirBnB_clone_v4/blob/master/assets/holberton-logo-horizontal.jpg"
       alt="Holbertonbnb logo"
       width="500"
  >
</p>

### Description :house:

Holbertonbnb is a complete full-stack web application, integrating a MySQL database and Flask RESTful API with a dynamic
HTML5/CSS3/jQuery front-end.

<p align="center">
  <img src="https://github.com/TzStrikerYT/AirBnB_clone_v4/blob/master/assets/hbnb-stack.png"
       alt="Holbertonbnb logo"
       width="750"
  >
</p>

This proyect was do it along 4 differents proyects. In each one we create a different feature to manage and learn new tools to build this proyect. For this reason we will explain each feature more bellow in the readme.

### What this repository does include:

- Models class system built in Python.

  - [Source code](./models)

- Python console to manage back-end models

  - [Source code](./console.py)

- Flask web application server rendering HTML templates with Jinja2

  - [Source code](./web_flask)

- RESTful Flask API

  - [Source code](./api)
  - Swagger documentation - [bdbnb.site/apidocs](https://bdbnb.site/apidocs)

- Automatic deployment scripts.
  - [fabfile.py](./fabfile.py)
  - [setup_server.pp](./setup_server.pp)
  
### Dependencies

Application:

| Tool/Library | Version |
| ------------ | ------- |
| Python       | ^3.6.4  |
| MySQL        | ^5.6.0  |
| Flask        | ^1.0.3  |
| flasgger     | ^0.9.2  |
| Flask-Cors   | ^3.0.8  |
| mysqlclient  | ^1.3.10 |
| SQLAlchemy   | ^1.3.5  |

Deployment:

| Tool/Library | Version |
| ------------ | ------- |
| Python       | ^3.7.3  |
| gunicorn     | ^19.9.0 |
| Fabric       | ^2.4.0  |
| Puppet       | ^5.4.0  |

## AirBnB Clone - The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

#### Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object

#### Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

#### Installation
* Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
* Access AirBnb directory: `cd AirBnB_clone`
* Run hbnb(interactively): `./console` and enter command
* Run hbnb(non-interactively): `echo "<command>" | ./console.py`

#### File Descriptions
[console.py](console.py) - the console contains the entry point of the command interpreter. 
List of commands this console current supports:
* `EOF` - exits console 
* `quit` - exits console
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file). 
* `show` - Prints the string representation of an instance based on the class name and id.
* `all` - Prints all string representation of all instances based or not on the class name. 
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file). 


#### Examples of use
```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```

#### Bugs
No known bugs at this time.

## AirBnB Clone - Flask web application server with Jinja2
HTML files for HolbertonBnB are rendered by this application server, built in Python Flask and using Jinja2.

#### File Descriptions
 [templates](./web_flask/templates): The HTML5 content for HolbertonBnB.
  * [templates/index.html](./web_flask/templates/index.html): The root page of HolbertonBnB.
* [static](./web_flask/static): Static content included in [templates/index.html](./web_flask/templates/index.html).
  * [static/images](./web_flask/templates/static/images): Image files.
  * [static/scripts](./web_flask/templates/static/scripts): JavaScript scripts (uses jQuery).
  * [static/images](./web_flask/templates/static/styles): CSS3 stylesheets.

#### Examples of use :running:
Assuming the above dependencies have been installed, the app server can be started using the following command:

```
python3 web_flask.app
```

#### Bugs
No known bugs at this time.

## AirBnB Clone - RESTful Flask API
The complete documentation for the API can be read using Swagger documentation - [bdbnb.site/apidocs](https://bdbnb.site/apidocs).

#### File Descriptions
All file use the different endpoint inside de api/v1/views.

#### Examples of use :running:

Assuming the above dependencies have been installed, the API can be started using the following command:
```
python3 api.v1.app
```
#### Bugs
No known bugs at this time.

## AirBnB Clone - Automatic deployment
Fabric and Puppet scripts for automatically, remotely deploying HolbertonBnB.

#### Examples of use :running:
* setup_server.pp: Puppet manifest that configures a web server for deployment of HolbertonBnB.
  * Usage: `sudo puppet apply setup_server.pp` (note that `sudo` privileges are required).
  * Ensures installation of Nginx, copies in an Nginx configuration file, and runs the service.
  * Creates the directory `/data` to store the application, set the proper permissions.

* fabfile.py: Fabric fabfile to deploy HolbertonBnB to a web server.
  * Run `fab --list` to list all available commands.
  * Usage: `fab <script> --<option>=<value>`
  * Options:
    * `pack --folder=STR`: Creates a tar archive.
    * `upload --archive=STR`: Distributes a tar archive.
    * `pack-and-upload --folder=STR`: Creates and distributes a tar archive.
    * `restart`: Restarts the WSGI apps.
    * `deploy --folder=STR`: All of the above for a given folder(s).

#### Bugs
No known bugs at this time.

## Authors
Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)  
Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)  
Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)  
David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)  
Angel Pedroza - [Github](https://github.com/AngelPedroza) / [Twitter](https://twitter.com/AngelPe67860063)  
Michael Cocuy - [Github](https://github.com/TzStrikerYT)  

Second part of Airbnb: Joann Vuong
## License
Public Domain. No copy write protection. 
