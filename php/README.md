Run tests by:
```
$ phpunit exercism/example_test.php
``

Running the tests

    Go to the root of your PHP exercise directory, which is <EXERCISM_WORKSPACE>/php. To find the Exercism workspace run

     % exercism debug | grep Workspace

    Get PHPUnit if you don't have it already.

     % wget --no-check-certificate https://phar.phpunit.de/phpunit.phar
     % chmod +x phpunit.phar

    Execute the tests:

     % ./phpunit.phar hamming/hamming_test.php
