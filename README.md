# Objective

To make an online quickdraw recogniser similar to https://quickdraw.withgoogle.com/ using angular.
Train a model to recognise doodles for 10 classes of images.
Creating a webpage using angular.

# Clone the repository

git clone --branch master https://github.com/bulkpanda/quickdraw

# For installation of required packages

pip install requirements.txt

# Webpage

The built files from 'ng build --prod' are located in docs, can use them directly for deployment.
To run yourself clone the repo, go inside the folder quickdraw and run "ng build" command without the inverted comma.
Deployed on AWS server http://18.221.124.152 .

# The model

## For pretrained model

Located in saved_models by the name 100model.onnx.
See inference_server.py file 'play' section to learn how to use the model for inference.
just change the path value to try own images for testing.

## Loss and accuracy curves
![alt text](https://github.com/bulkpanda/quickdraw/blob/plots/accuracy?raw=true)

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
