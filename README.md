# LIFF Starter App

This is a small web application that demonstrates the basic functionality of the [LINE Front-end Framework (LIFF)](https://developers.line.me/en/docs/liff/overview/). 

## Prerequisites
* [A channel on the LINE Developers Console](https://developers.line.me/en/docs/liff/getting-started/) for your application.
* [A channel access token](https://developers.line.me/en/docs/liff/getting-started/#preparing-channel-access-token)
* A [Heroku account](https://www.heroku.com)

## Deploying the application

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/line/line-liff-starter)

1. Click the above "Deploy to Heroku button".
2. Fill in the required information on the "Create a New App" page in Heroku.
3. Select Deploy app and confirm that your app is successfully deployed.
4. Record the app URL (https://{Heroku app name}.herokuapp.com). You will set this URL when you add the app to LIFF.

## Adding the starter app to LIFF

Add the app to LIFF. For more information, see [Adding a LIFF app](https://developers.line.me/en/docs/liff/registering-liff-apps/).

## Running the application

1. To run this application, host these files on a web server.
2. Set your LIFF's entryUrl to point to index.html.
3. Open your LIFF in the LINE app.


## Trying it out

To open the LIFF app within the LINE app, follow the steps below.

1. Tap `line://app/{liffId}` on the chat screen of the LINE app. `{liffId}` is the LIFF app ID returned to the API request to add the app to LIFF.

2. Agree to grant the required permissions to the LIFF app.

3. When opening the LIFF app, the following four buttons and the content of received information are displayed.

    - Open Window: Opens `https://line.me` in the in-app browser of the LINE app.
    - Close Window: Closes the LIFF app.
    - Get Access Token: Gets the current user's access token.
    - Get Profile: Gets the current user's profile.
    - Send Messages: Sends a sample message on behalf of the user if the LIFF app is opened in the chat screen.


For API calls associated with the buttons, see [Calling the LIFF API](https://developers.line.me/en/docs/liff/developing-liff-apps#calling-liff-api). For the received information, see [Initializing the LIFF app](https://developers.line.me/en/docs/liff/developing-liff-apps#initializing-liff-app).

## Checking logs

To get more information, you can check the logs of your app using [Heroku CLI][heroku-cli].

1. Log in to Heroku from the command line.

    ```shell
    $ heroku login
    ```

1. Check the logs.

    ```shell
    $ heroku logs --app {Heroku app name} --tail
    ```

## Downloading and making changes to the starter app

You can download the starter app to your local machine to test and make changes for yourself. You can then deploy the app to a web server of your choice. Here, we'll look at how to make and deploy changes to the Heroku app you created in the previous step.

1. Make sure you have the following installed
    - [Git](https://git-scm.com/)

1. Clone the [line-liff-starter](https://github.com/line/line-liff-starter) GitHub repository.

    ```shell
    git clone https://github.com/line/line-liff-starter.git
    ```

1. `cd` into your Git directory.
1. Add a remote for Heroku to your local repository.

    ```shell
    $ heroku git:remote -a {Heroku app name}
    ```

1. Make edits and commit changes (optional).

    ```shell
    $ git add .
    $ git commit -m "First commit"
    ```

1. Push changes to Heroku master.

    ```shell
    $ git push heroku master


[console]: /console/ 
[heroku]: https://www.heroku.com/
[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli
