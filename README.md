END POINTs

**FOR LOGIN
curl --location 'http://localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "manager",
    "password": "manager123"
}'

**FOR ADMIN DASHBOARD
curl --location 'http://localhost:3000/admin-dashboard' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtYW5hZ2VyIiwicm9sZSI6Im1hbmFnZXIiLCJpYXQiOjE3NTE4NzM2ODZ9.l0Vr5nAUPPjacKd0Mqqz35CKj5V9IWDcsl42zXx110s'

**FOR MANAGERddASHBOARD
curl --location 'http://localhost:3000/manager-dashboard' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtYW5hZ2VyIiwicm9sZSI6Im1hbmFnZXIiLCJpYXQiOjE3NTE4NzM2ODZ9.l0Vr5nAUPPjacKd0Mqqz35CKj5V9IWDcsl42zXx110s'

**FOR USER DASHBOARD
curl --location 'http://localhost:3000/user-dashboard' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtYW5hZ2VyIiwicm9sZSI6Im1hbmFnZXIiLCJpYXQiOjE3NTE4NzM2ODZ9.l0Vr5nAUPPjacKd0Mqqz35CKj5V9IWDcsl42zXx110s'
