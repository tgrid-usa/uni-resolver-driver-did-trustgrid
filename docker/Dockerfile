# Dockerfile for exampleorg/uni-resolver-driver-did-example

FROM node:18

# build uni-resolver-driver-did-example

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . .

# variables

ENV uniresolver_driver_did_example_exampleSetting=exampleSetting

# done

EXPOSE 8080

CMD [ "yarn", "start" ]
