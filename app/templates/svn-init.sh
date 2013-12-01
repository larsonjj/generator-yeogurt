#!/bin/bash
# Setup SVN to ignore all files/folder within .svnignore file
svn propset svn:ignore -RF .svnignore .