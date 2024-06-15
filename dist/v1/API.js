var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from 'axios';
import { match, compile } from 'path-to-regexp';
import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PartnersApiModule from './modules/PartnersApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';
var ApiEndpoint = /** @class */ (function () {
    function ApiEndpoint(url) {
        this._url = url;
    }
    Object.defineProperty(ApiEndpoint.prototype, "url", {
        get: function () { return this._url; },
        enumerable: false,
        configurable: true
    });
    ApiEndpoint.prototype.match = function (url) {
        return match(this._url, { decode: decodeURIComponent })(url) !== false;
    };
    ApiEndpoint.prototype.compile = function (params) {
        return compile(this._url, { encode: encodeURIComponent })(params);
    };
    return ApiEndpoint;
}());
export { ApiEndpoint };
var Api = /** @class */ (function () {
    function Api() {
        this._minigames = new MinigamesApiModule(this);
        this._mmos = new MMOSApiModule(this);
        this._partners = new PartnersApiModule(this);
        this._players = new PlayersApiModule(this);
        this._rewards = new RewardsApiModule(this);
        this._service = new ServiceApiModule(this);
    }
    Object.defineProperty(Api, "HEADER_GAMECODE", {
        get: function () { return 'X-PlayScience-GameCode'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api, "HEADER_GAMEVERSION", {
        get: function () { return 'X-PlayScience-GameVersion'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "shortcutRequestEvaluator", {
        get: function () { return this._shortcutRequestEvaluator; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "shortcutRequestCallback", {
        get: function () { return this._shortcutRequestCallback; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "idToken", {
        get: function () {
            return this._idToken;
        },
        set: function (value) {
            this._idToken = value;
            if (value) {
                axios.defaults.headers.common['Authorization'] = "Bearer ".concat(value);
            }
            else {
                delete axios.defaults.headers.common['Authorization'];
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "minigames", {
        get: function () { return this._minigames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "mmos", {
        get: function () { return this._mmos; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "partners", {
        get: function () { return this._partners; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "players", {
        get: function () { return this._players; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "rewards", {
        get: function () { return this._rewards; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "service", {
        get: function () { return this._service; },
        enumerable: false,
        configurable: true
    });
    Api.prototype.init = function (options) {
        var _this = this;
        var host = options.host, gameVersion = options.gameVersion, gameCode = options.gameCode, shortcutRequestEvaluator = options.shortcutRequestEvaluator, shortcutRequestCallback = options.shortcutRequestCallback;
        axios.defaults.baseURL = host;
        axios.defaults.headers.common['content-type'] = 'application/json';
        axios.defaults.headers.common['X-PlayScience-GameCode'] = gameCode;
        axios.defaults.headers.common['X-PlayScience-GameVersion'] = gameVersion;
        this._shortcutRequestEvaluator = shortcutRequestEvaluator || (function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, false];
        }); }); });
        this._shortcutRequestCallback = shortcutRequestCallback;
    };
    Api.prototype.request = function (requestOptions_1) {
        return __awaiter(this, arguments, void 0, function (requestOptions, expectedStatusCode) {
            var response, shortcutRequest;
            var _a;
            if (expectedStatusCode === void 0) { expectedStatusCode = 200; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._shortcutRequestEvaluator(requestOptions)];
                    case 1:
                        shortcutRequest = _b.sent();
                        if (!shortcutRequest) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._shortcutRequestCallback(requestOptions, expectedStatusCode)];
                    case 2:
                        response = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, axios(requestOptions)];
                    case 4:
                        response = _b.sent();
                        _b.label = 5;
                    case 5:
                        if (!response || !response.data || response.status !== expectedStatusCode) {
                            throw new Error("ERR ".concat(response.status, ": ").concat((_a = response.data) === null || _a === void 0 ? void 0 : _a.message), {
                                cause: requestOptions
                            });
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Api.GET = 'GET';
    Api.POST = 'POST';
    return Api;
}());
export { Api };
//# sourceMappingURL=Api.js.map