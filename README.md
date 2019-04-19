# Cal Clubhouse dashboard

## Steps to setup the backend development environment
* install Go https://golang.org/doc/install
* install dep https://github.com/golang/dep
* install Docker https://docs.docker.com/docker-for-mac/install/
* clone this repo into $GOPATH/src/github.com/Clubhouse-Cal/

* Then run the following to start the Docker container running mysql

```bash
$ docker pull mysql/mysql-server:5.7
$ docker run --name=clubhouseDb -e MYSQL_ROOT_HOST=% -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -p 3306:3306 -d mysql/mysql-server:5.7
```

* Then, attach to your Docker container (I do this in a separate terminal tab and keep it open at all times)
```bash
$ sudo docker exec -it clubhouseDb bash
```

* Create a clubhouse database in your Docker container
```bash
$ mysql -uroot
> create database clubhouse;
```

* Then you should be able to run the backend server in your first terminal tab
```bash
$ go run main.go
```
## Helpful Links
* [Explanation of how to interpret raw Trackman data](https://trackman.zendesk.com/hc/en-us/articles/115002776647-Radar-Measurement-Glossary-of-Terms)

## TODOs/Suggestions
* Explore converting the backend to Python due to more ML/stats libraries available
* Deploy into production
