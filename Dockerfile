FROM node:14-alpine as builder

ENV NODE_ENV build

COPY . /home/code/app

WORKDIR /home/code/app/code

RUN npm i && npm run build && npm prune --production

FROM node:14-alpine


WORKDIR /home/code/app/code

COPY --from=builder /home/code/app/code/package*.json /home/code/app/code/

COPY --from=builder /home/code/app/code/node_modules/ /home/code/app/code/node_modules/

COPY --from=builder /home/code/app/code/dist/ /home/code/app/code/dist/

CMD ["node", "/home/code/app/code/dist/main.js"]
