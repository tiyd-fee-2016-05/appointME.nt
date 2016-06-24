# appointME.nt
Rhonda &amp; Jordan

We will have 4 templates to use with Vue.js:
    1. <template id="homepage">
    2. <template id="new-app">
    3. <template id="app-info">
    4. <template id="edit-app">

## Home Page
Displays a list of upcoming appointments.

'+' button displays page for user to enter a new appointment:

      v-link="{ path: '/new' }"

Search bar identifies possible appointment matches.

Clicking on an appointment displays the View Appointment page:

      v-link="{ path: '/view' }"

### Vue.js
    router.map({
        '/home' : {
          component: homepage
        }
        '/new' : {
          component: newapp
        }
        '/edit' : {
          component: editapp
        }
        '/view' : {
          component: appinfo
        }
      })

## New Appointment Page
Displays all input fields required for a new appointment.

Input IDs:
>'#input-title'

>'#input-street'

>'#input-city'

>'#input-date'

>'#input-time'

## Edit Appointment Page

## View Appointment Page
