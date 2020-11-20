# What is Docker all about?

## Ans:

- With docker we create a series of containers
- A container is a isolated computing environment. it containes everything that is required to run one single program.
- we will create seperate docker containers to run each individual services
- if we need a multiple copies of some service we will start up a second docker container

![](https://i.imgur.com/EWzp0If.png)

# why we need Docker?

## Ans:

normally to run our program we are assuming that npm and node is already installed to our local machine . Also, to run our application needs the requirements to have the exact knowledge of how to start it up. for that we have to run the exact commands every time in different services to start our app and run. so eventually to start and run lot of service , it becomes very confusing and strange and also we need the implicite requirements about the environment that we are running our program on.

Docker removes both of the issues by creating containers that will wrap up all the dependencies that we required to run our program.

That means, each container will wrap up NPM and NODE in it and also will hold the information about how to start up and run our program as well.

So actually running a lot of arbitrary program becomes very easy with Docker.

# what is kubetnetes?

##

Kubernetes is a tool to run a bunch of different container togather

## how it works?

- we give kubernetes a configuration files that holds the information/ description about how we want our containers to run and interact with each other
- kubernetes then
  - creates these containers that will run our programs
  - it will handle communiations between the containers too

to be continued...
