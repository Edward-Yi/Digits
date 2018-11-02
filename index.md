<img src="doc/landing.png">

<h2>Installation</h2>
<p><a href="https://github.com/Edward-Yi/digits">Download digits </a> and <a href="https://www.meteor.com/install">install meteor</a></p>

<p>Open command prompt and cd into the app directory</p>

<p>Install the required libraries with: <strong>meteor npm install</strong></p>

<p>Run the app with: <strong>meteor npm run start</strong></p>

<p><strong>Regarding the bcrypt warning:</strong> installing bcrypt is more difficult than the prompt shows. And, it is safe to ignore this warning in the initial stages of development.</p>

<h2>Pages Walkthrough</h2>

<h3>Landing page</h3>
<p>This is the first page that you see on your first startup. It has a brief introduction of what Digits is capable of.</p>
<img src="doc/landing.png">

<h3>Register</h3>
<p>Users can register, if they do not have an account, by clicking "Login" on the top right, then "Sign Up" from the dropdown.</p>
<img src="doc/register.png">

<h3>Sign in</h3>
<p>Users that have an account can click on "Login", then "Sign in"</p>
<img src="doc/signin.png">

<h3>Home page</h3>
<p>Once logged into an account, the landing page will have additional options in the navigation bar, "Add Contact" and "List Contacts".</p>
<img src="doc/home.png">

<h3>Add Contact</h3>
<p>By clicking on "Add Contact" in the navigation bar brings the user to a page with a form to fill out, clicking submit to add a contact to their list. The add will fail if there are any empty fields.</p>
<img src="doc/add.png">

<h3>List Contacts</h3>
<p>Clicking on "List Contacts", the user is redirected to a page with a list of contacts that are associated to the user.</p>
<img src="doc/list.png">

<p>You can also add timestamped notes, under the contact you want to add the note to.</p>
<img src="doc/time.png">

<h3>Edit Contacts</h3>
<p>Clicking on "Edit", under the contact will bring up a form page, similar to "Add Contact", that is filled with the contact's initial information. Changing parts of the form and clicking submit will change the contents of the contact in "List Contact" and you are redirected to that page.</p>
<img src="doc/edit.png">

<h3>Admin</h3>
<p>Admins have the "Admin" available to them in the navigation bar, users must have the Admin role. It lists all contacts and which users they are associated with.</p>
<img src="doc/admin.png">