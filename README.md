# WEB103 Project 3 - *Virtual Community Space*

Submitted by: **Patrick Lisiecki**

About this web app: **A virtual community space with an interactive interface that allows users to explore music events by venue location.**

Time spent: **4** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [X] **The web app uses React to display data from the API**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [X] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [X] **The web app displays the title of the app**
- [X] **A visual interface allows the user to select a Location they would like to view**
- [X] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [X] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [ ] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [ ] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/PatrickLisiecki/virtual-community-space/blob/main/demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with GeForce Experience and CloudConvert.

## Railway Database

Here's the pictures of the Railway PostgreSQL Database Tables:

<img src='https://github.com/PatrickLisiecki/virtual-community-space/blob/main/db_1.png' title='Database 1' width='' alt='Database 1' />

<img src='https://github.com/PatrickLisiecki/virtual-community-space/blob/main/db_2.png' title='Database 2' width='' alt='Database 2' />

## Notes

I faced some challenges when implementing the location router and controller because I wasn't matching the variable name in the URL params.

## License

Copyright 2024 Patrick Lisiecki

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.