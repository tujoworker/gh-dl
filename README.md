# GH-DL

A simple CLI tool allowing you to download a single folder from GitHub without cloning the whole repository.

### Installation

```
npm install -g gh-dl
```

### Usage

```
gh-dl https://github.com/user/repo/tree/branch/path/to/a/folder
```

### Note

If you get an error like this:

> svn: E230001: Server SSL certificate verification failed: issuer is not trusted

run `svn list [the logged URL]` and accept the certificate permanently.

### Credit

Inspired by [this SO answer](https://stackoverflow.com/a/18194523/3719276).