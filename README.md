Extract translations from library:

1. ng build test-lib
2. localize-extract -r . -s "dist/test-lib/fesm2015/*.js" -f xlf -o messages-test-lib.xlf
