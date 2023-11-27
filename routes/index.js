const express = require('express');
const router = express.Router();
const path = require("path");
const profile = path.join(path.dirname(__dirname), "public/profile/profile.ttl")

const { Application } = require("solid-interoperability")

const solidApp = new Application({
      name:"sw7-07.online",
      profile:profile
});

router.get("/", solidApp.Router)

module.exports = router;
