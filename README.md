# Brighton Bulldogs Mountain Bike Team

This is the public Web Site for the Brighton Bulldogs Moutain Bike team. It's goal is to: 

* Communicate Information about our club
* Provide a History of people and pictures
* Link to our team yearly google sheets and enable easy check ins

## Check-In Feature

A mobile web page is used to scan QR codes and populate google sheet which is used to track Check-Ins and automatically mark attendance week to week. 

![](https://user-images.githubusercontent.com/5032366/240044830-2da05989-ec8a-4751-949e-2ab9546de57a.png)


## Get Started

1. nodejs - Developed with v19.3.0
1. clone project
1. `npm install`
1. `vercel dev` while local testing

### Google Credintials

This Repo has credintials defined 

* https://console.cloud.google.com/apis/dashboard
* Create a project called "checkin-access"
* Add a Service Account Credintial
* Make sure the service account has access to the Google Sheets API
  * https://console.cloud.google.com/apis/credentials?project=checkin-access
  * https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials?project=checkin-access

The creation of credintials yields .env variables for `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY`

The `GOOGLE_SERVICE_ACCOUNT_EMAIL` address needs to be invited to have edit access to your spreadsheet.

### Google Spreadsheet

A master Google Spreadsheet is used as the database, and configured with .env variable:

* `SPREADSHEET_ID=AGOOGLESPREADSHEETID`

#### Main Tracking Sheet

Provides list of user identities, configured in .env variable:

* `RIDER_RANGE=2ColumnRangewithIDsandRiders!A:B`

![](https://user-images.githubusercontent.com/5032366/240043916-8ec6a0bf-c88f-4783-bbd0-b55d585b9654.png)

#### Scan Log Sheet

Provides list of user check ins, configured in two .env variables: 

* `SPREADSHEET_SHEET=ScanLogSheetName`
* `CHECKIN_RANGE=4ColumnRangeofScanLogSheetName!A:D`

![](https://user-images.githubusercontent.com/5032366/240044153-17f4f818-6baf-40e6-896d-07e389161349.png)

### Testing

`vercel dev` runs the system locally for testing. 

### Publishing

This repo is setup as a project on vercel to automatically deploy, with linked domain of https://dogsmtb.com

