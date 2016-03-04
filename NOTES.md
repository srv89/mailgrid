# Mailgrid Notes

#### Email Services Used
* Sendgrid
* Pepipost
* Postmark
* PostageApp

#### Things to learn and add
* Travis CI
* Unit Testing Framework
* Pipelines
* Grunt

#### Issues
* Still pushing to GitHub using wrong account
	* Happens if previously pushed using other account 'ssadhoo'
	* Try setting user.name, user.email and git remote set-url origin



#### POST /email

> Example body format

```
{
  "From": "sender@example.com",
  "To": "receiver@example.com",
  "Cc": "copied@example.com",
  "Bcc": "blank-copied@example.com",
  "Subject": "Test",
  "Tag": "Invitation",
  "HtmlBody": "<b>Hello</b>",
  "TextBody": "Hello",
  "ReplyTo": "reply@example.com",
  "Headers": [
    {
      "Name": "CUSTOM-HEADER",
      "Value": "value"
    }
  ],
  "TrackOpens": true,
  "Attachments": [
    {
      "Name": "readme.txt",
      "Content": "dGVzdCBjb250ZW50",
      "ContentType": "text/plain"
    },
    {
      "Name": "report.pdf",
      "Content": "dGVzdCBjb250ZW50",
      "ContentType": "application/octet-stream"
    }
  ]
}
```

> Example response format

```
{
	"To": "receiver@example.com",
	"SubmittedAt": "2014-02-17T07:25:01.4178645-05:00",
	"MessageID": "0a129aee-e1cd-480d-b08d-4f48548ff48d",
	"ErrorCode": 0,
	"Message": "OK"
}
```
