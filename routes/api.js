"use strict";
/*
 * GET users listing.
 */
exports.test = function (req, res)
{
	res.send({ test : 'hello world'});
};
exports.apiError = function (req, res)
{
	res.send(500, 'Not a valid api method.');
};