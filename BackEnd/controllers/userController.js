"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const express = require('express');
const user = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
// CREATE
user.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _a = req.body, { password } = _a, etc = __rest(_a, ["password"]);
        const user = yield new User(Object.assign(Object.assign({}, etc), { passwordDigest: yield bcrypt.hash(password, 16) })).save();
        res.send(user);
    }
    catch (error) {
        res.status(500).json({ message: `Unable to add User: ${error}` });
        console.log(error);
    }
}));
// LOGIN
user.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield User.findOne({
            where: { name: req.body.name },
        });
        if (!user ||
            !(yield bcrypt.compare(req.body.password, user.passwordDigest))) {
            res.status(404).json({
                message: "Please make sure email and password are correct",
            });
        }
        else {
            res.json({ user });
        }
    }
    catch (error) {
        res.status(500).json({ message: `Unable to add User: ${error}` });
        console.log(error);
    }
}));
// USER PROFILE
user.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield User.findById(req.params.id).populate({
            path: 'items',
        });
        res.send(user);
    }
    catch (error) {
        res.status(500).json({ message: `${error}` });
        console.log(error);
    }
}));
module.exports = user;
