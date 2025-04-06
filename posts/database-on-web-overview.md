---
title: "Databases on the Web"
date: "July 3, 2020"
excerpt: "Brief Overview of Databases on the Web"
---

When you log on to Facebook, you ever wonder how they keep track of you as a user and all the comments, photos, and posts you and other users post on the web? Well, all that data is stored on Databases. Databases are used to store and access data, and I want to talk about how databases work, in context to web applications.

## Static vs. Dynamic Websites

Before we get into databases and how they work on the web, let’s get into two types of web pages that exist on the web:

1. Static
2. Dynamic

**Static**

These websites are just for presentation. These websites only display information like text and images, and users *can’t interact* with static websites.

**Dynamic**

Unlike static websites, dynamic websites *allow for user interaction*. So on a site like Facebook, when you write a post and hit send, that starts a process that saves that information somewhere and allows you to access it later. That somewhere is in the database associated with Facebook’s web app.

![web server and client](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mlYo7WKQJK6aqkiciU3VLA.png)


## DBMS

DBMS, or [Database Management Systems](https://www.techopedia.com/definition/24361/database-management-systems-dbms), allows users to define, manipulate, retrieve, and manage data in the database.

There are two types of DBMS systems:

1. SQL
2. NoSQL

## SQL

[SQL](https://en.wikipedia.org/wiki/SQL), or Structured Query Language, is a language designed to manage [relational databases](https://en.wikipedia.org/wiki/Relational_database#RDBMS). SQL is one of the most versatile and widely-used options available, making it a safe choice for your next project. One significant advantage of SQL is that it gives the user the ability to access a considerable amount of data with a single command. A disadvantage of SQL is it can be restrictive.

SQL requires that you use predefined schemas to determine your data’s structure before you work with it. Data is always stored as a table in SQL databases, which leads to complicated data retrievals. Also, all of your data must follow the same structure; this can require significant effort and may lead to a highly complicated data processing code that can affect the overall application quality.

Some of the most popular SQL database management systems include:

1. SQL
2. PostgreSQL
3. MariaDB

## NoSQL

[NoSQL](https://en.wikipedia.org/wiki/NoSQLMongoDB
Apache CouchDB
Redis) or No-SQL databases. NoSQL databases stores data differently from relational databases. They have a dynamic schema for unstructured data, and data can be stored in many ways, including key-value pairs, documents, and even graphs, making NoSQL flexible. Unlike relational databases, users do not have to define the structure of their data schemas. Each data set can have a unique structure without having to worry about writing extraneous lines of code to process this data to match a specific predefined structure. These databases can grow dynamically, and the structure of data can vary from database to database.

Popular NoSQL databases that we will be covering in this chapter include:

1. MongoDB
2. Apache CouchDB
3. Redis

That was just a very brief overview of the role of databases and database management systems in web development. Hopefully, this helped with your curiosity and how all of your data persisted on the web.