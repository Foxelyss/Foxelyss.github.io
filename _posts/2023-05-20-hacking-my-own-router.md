---
title: "How I hacked my router"
layout: post
date: 2023-05-20 22:06:19 +0700
categories: programming
---

## Introduction

My router is NetGear WNR512v3, cheap model from 2010's; I had been worried about its security for 5 years until 2022, when I finally had time and experience to hack it.

## Beginning

I started with research and found GitHub with firmware and README attached to it, which explains how to connect to the router. So, the plan was simple:

1. connect via telnet
2. execute programs
3. profit

But what if there is a... **~~Stumbling block~~**

## Connecting and reviewing specs

That was easy. Just `telnet 192.168.1.1` with entering user and password, which are using the same word "root". After examining all directories, I find very interesting thing - my router uses UClibC as standard C language system library. That and many other things made process of finding information and compilers more complicated and time consuming, MIPS architecture didn't help either.

## Transferring data to router

Luckily, router version of busybox has tftp utility, that's making process straightforward. To transfer data from and to the router I just need tftp server running on my PC.

## Executing some programs

### Finding working binaries

I tried very hard; found GitHubs with MIPS binaries. The result of running them is one - `segmentation fault` or `SIGSEGV` for short, which means they tryed to access memory that didn't belong to them.

### Finding working compilers

I found a list of compilers built for Linux and Windows. Firstly I tried Green Hills MIPS compiler, after 12 minutes of extracting 3GB archive, then compiling simple program, I realised - it doesn't work for MIPS v1(program crashes with invalid instruction error). Then I tried some old Phillips compiler, it doesn't work too. None of compilers from that list work.

## Finally result

I looked up on UClibC website and found... Fully working MIPS v1 UClibC compiler! I thought "Finally!", but then segmentation fault when ran compiled lua. I was so exhausted and burned out at the end that couldn't finish my plan.

## Conclusion

I spent more than 14 days to find working compiler... My router doesn't allow outside access to admin panel and my ISP doesn't portforward telnet protocol.
