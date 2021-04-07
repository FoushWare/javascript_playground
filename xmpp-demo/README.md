<!-- @format -->

# XMPP

XMPP is the open standard for messaging and presence

- You can send message from Alien👽(foush) to Monster👾(foushware) [Me 😂]
- You can only say (🖐️ hey Bakar i'm online)

### purpose of it

Standardize the messaging .... some people use TCD some UDB so xmpp came to make standard for it

### How i used it in this lib

1 - run a docker image ejabberd on my machine (server ejabberd is the xmpp server)

```
docker run --name ejabberd -p 5222:5222 ejabberd/ecs

```

2- exec on the docker container and run the bin file and create a new user called admin and host called localhost and password for the user

```
docker exec -it ejabberd bin/ejabberdctl register admin localhost password

```

3 - Make the same as number 2 and create anoter user called foushware

```
docker exec -it ejabberd bin/ejabberdctl register admin localhost password
```

4 - run a client to deal with the server called simple-xmpp
