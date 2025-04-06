---
title: "A Brief Overview of the Web."
date: "April 3, 2020"
excerpt: "A Brief Overview of the Web."
---

## What is the Web?

So what is the web?

Well, in a nutshell, the web is a global network of devices that connects with a plethora of other devices and allows them to communicate with one another — a network of networks.

Those websites users go to when they surf the Internet, are hosted on devices called [servers](https://en.wikipedia.org/wiki/Server_(computing)).

When we go on the Internet and visit these websites and start clicking around and browsing them, we are just exchanging data with the server.

The device we are on when we are accessing the webpage is called the [client](https://en.wikipedia.org/wiki/Client_(computing)).

So to put it shortly, the web allows us to exchange data between clients and servers through many complex processes that go on behind the scenes.

### Network Layers

Since the web is a network that is so intricate and widespread, machines within the network, are split into abstract layers. Each layer has to perform a specific task that helps with the overall process of communication. These abstract layers are called the [Network Layers](https://en.wikipedia.org/wiki/Network_layer).

Five layers make up the network layers. They are all built on top of each other, with each layer having unique protocols that execute functionalities that are involved in the data exchange process.

These layers include:

1. Application Layer
2. Transport Layer
3. Network Layer.
4. Data Link Layer.
5. Physical Layer.

![network model](https://miro.medium.com/v2/resize:fit:1280/format:webp/0*UoKmRJcOBOO-CoJN.jpg)



**Physical layer**

This layer is all the hardware that makes machines available to the network.

**Data Link layer**

This layer is responsible for the transmission of data between machines, which are precisely only one link away from each other.

**Network layer**

This layer connects any two machines communicating with each other on the Internet. It provides global connectivity that allows computers to communicate with each other on a larger scale, unlike the data link layer.

**Transport layer**

This layer is responsible for connecting applications on the Internet. It is responsible for the delivery of information between processes on different machines on the Internet. It takes data from a single source and distributes the data to the target application.

**Application layer**

This layer is the topmost layer of the five networking layers. It is responsible for governing communication between client to server processes across the Internet. Here is where the applications requiring network communications live.


## How Does It Work?

So now that we have an idea of what the Internet is. Let’s get a sense of how it works. In layman’s terms, the Internet is just clients sending messages to servers and requesting data. Then those servers respond by sending the data required back. But how does it work under the hood? How is the data transferred? Well, let’s talk about how the Internet is structured.

**Switches to Connect Devices**

The Internet include devices called [switches](https://en.wikipedia.org/wiki/Network_switch). Switches facilitate the connection of each device to every other device on the network. Those devices are also known as [end-systems](https://en.wikipedia.org/wiki/End_system). End-system is just a fancy name for the computer you are using to access this website.

The way end-systems connect to switches is through links, and all the switches connect; this ensures the connection of every other end-system on the Internet.

Switches also help facilitate the communication between any two computers by forwarding [packets](https://whatismyipaddress.com/data-packets) along a pre-determined path between the packet source and the destination.

### Routers
[Routers](https://www.lifewire.com/what-is-a-router-2618162), much like switches, connect computers to the rest of the web. However, what makes routers different from switches, is the capability of allowing lookups for destination addresses and finding the shortest or the least busy path from the source of the packets, to its destination. Therefore, routers are a much more powerful version of switches.

Ultimately, the Internet comprises of a mixture of both switches and routers that facilitate the transfer of data between end-systems.

![Switches and Modems](https://miro.medium.com/v2/resize:fit:1024/format:webp/0*DbzGiyUZEWRLu_gp)

## Packets
How is data transported across the network? Let’s talk about it. Data on the web is just a set of bits. When data needs to be transferred across the Internet, it’s split into smaller chunks of bits called packets, once divided, these packets are sent to their destination independently.

Why is the data split up? Well, you can’t always send large amounts of data in a single packet because it increases the chances of that data becoming corrupted before it reaches its destination. So, it is much more efficient to send smaller packets.

**TCP**

Clients and servers need to be able to understand the same language across the network; there are protocols in place the dictate the communication between devices on the Internet.

[Transmission Control Protocol (TCP)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) is the most commonly used protocol. TCP is a transport layer protocol that governs transmitting data and ensures reliable data transfer between clients and servers across the web.

It does this by adding additional information to data packets that allow for packet authentication and by enabling the exchange of acknowledgment messages between the client and server to confirm data transmissions.

The TCP protocol starts with a 3-way handshake. The handshake allows both ends (server and client) to initiate and maintain several TCP connections at once. Have a look at the simplified diagram of the TCP 3-way handshake below.

![client and server tcp](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*L6q_nBYJgJPecSle.png)


### HTTP & HTTPS
Once the clients and servers communicate with each other by initiating TCP connections and then sending messages to one another. What next? Well, let’s look at how exactly how these messages are structured.

[HyperText Transfer Protocol](https://en.wikipedia.org/wiki/HTTP), or HTTP, is an application layer protocol that dictates the structure and exchange of the messages from the client and server on the web.

The client and server program talk to each other by exchanging HTTP messages, and the benefit of HTTP is that it ensures messages are being delivered intact and in time.

The high-level idea is that HTTP is built on top of TCP. Creating an HTTP server for your web application just means that you are creating a server that clients create TCP connections with, for reliable data transfer.

In other words, HTTP is the means through which you can make sure your application is using TCP to transmit messages from clients to the server and vice versa.

So basically, when you enter a URL in your browser, what happens is that an HTTP command gets sent to the server hosting the application to fetch and transmit the requested web page through TCP. The most common structure of URLs is as follows: **https:**//www.educative.io/.

So, what’s **HTTPS**? HTTPS is an acronym for HyperText Transfer Protocol Secure, and it is just the secure version of HTTP. It just means that communications between the browser and the hosting server are encrypted so that no third parties on the network can access information that’s not intended to be shared.

![http request and response](https://miro.medium.com/v2/resize:fit:792/format:webp/0*GS3GLoPjxE09Xg0S.png)

### Ports
Ok, we discussed both the transport layer protocol as well as the application layer protocol and how they ensure efficient communication between end-systems on the web. But, where exactly do the messages these protocols allow end-systems to go?

[Ports](https://en.wikipedia.org/wiki/Port_(computer_networking)) are the endpoints of the communication between clients and servers. They are where messages from the network arrive on an end-system. Numbers designate ports, and all ports below 1024 are associated with a specific protocol each by default.

The port number for HTTP, for instance, is 80, and what this means is that any messages you send or receive on the web come in to and leave your machine on a socket at port 80. Ports above 1024 are open ports available to programmers to use for any process they want to communicate with a network.

## How Data Finds its Way?

So let’s talk about how data finds it’s way from its source to its destination.

So far, we went over the structure of the Internet and how it’s abstractions implement the protocols that ensure that the client and server understand one another.

Now let’s look at how clients and servers know where they want to send their data and what protocols exist to ensure each end-system on a network has a unique identity that allows other end-systems to reach out.

### Internet protocol & IP addresses & DNS
[Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol), more commonly known as IP, is a network layer protocol that is responsible for assigning addresses to devices to give them unique identities that make them reachable and discoverable. Each device on the Internet has a unique [IP address](https://en.wikipedia.org/wiki/IP_address) that other devices use to connect with it.

Once your website is live on a server, users will be able to connect with it through the IP address of the server and receive data. But where does the IP address come in? We reach websites through URLs.

Well, that’s where [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) comes in. Routers across the web do not store URLs for every single website hosted on the Internet; they only know IP addresses and forward packets towards their destinations based on them. Users, however, only know URLs, or ***domain names***, for the websites they are visiting.

To bridge this clear gap of information, the Internet makes use of **DNS servers**, which serve as a translator between end-systems and the routers that serve to forward data coming from them to their destinations. The process of making a lookup for a domain name on a DNS server and obtaining its corresponding IP address is called **DNS resolution**.

![DNS Server](https://miro.medium.com/v2/resize:fit:1200/format:webp/0*vHqzeGjHaqT8L1wE.jpg)

