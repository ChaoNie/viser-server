import sys

print 'This is from test.py:\n'
if len(sys.argv) > 1:
    print sys.argv[1]
else:
    print "No parameter"