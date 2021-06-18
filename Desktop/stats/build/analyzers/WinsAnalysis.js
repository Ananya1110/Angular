"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var winsAnalysis = /** @class */ (function () {
    function winsAnalysis(team) {
        this.team = team;
    }
    winsAnalysis.prototype.run = function (matches) {
        var Wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] == 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                Wins++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
                Wins++;
            }
        }
        return "Team " + this.team + " won $ {wins} game";
    };
    return winsAnalysis;
}());
exports.winsAnalysis = winsAnalysis;
