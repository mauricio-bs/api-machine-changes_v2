FROM node:16

WORKDIR /home/projects/node/machine_changes/api

COPY package.json yarn.* ./

RUN yarn

COPY . .

EXPOSE 5000

ENTRYPOINT [ "./init.sh" ]