<!-- BUILD THE CONTAINER -->
$ docker build -t merged-app .

<!-- RUN THE APP IN BACKGROUND -->
$ docker run -dp 127.0.0.1:1337:1337 merged-app

<!-- STOP CONTAINER -->
$ docker stop <CONTAINER-ID>

<!-- CHECK ALL RUNNING APPS -->
$ docker ps

<!-- GET ALL DOCKER IMAGES -->
$ docker images -all

<!-- DLETE AN IMAGE -->
$ docker image rm 05ef17c605ab -f
