# Changelog for balena-dashboards

All entries are made manually. This project adheres to [Semantic Versioning](http://semver.org/).

## 2.0.1 - 2019-3-3

-   Rename containers [Will Walker]
-   Clean up electron scripts [Will Walker]

## 2.0.0 - 2019-2-24

-   Introduces support for devices other than amd64  by replacing FROM
    arch line with %%BALENA_MACHINE_NAME%% [Will Walker]

## 1.0.1 - 2019-1-28

-   Extended stability for x11vnc using -find flag [Will Walker]
-   Create function for infinite looping [CJ Lambert & Will Walker]

## 1.0.0 - 2019-1-10

-   Initial commit for all code.  Basing off of multi-container image used for
    timestations.  Starting with Debian Buster due to expected release date by
    end of semester. [Will Walker]
