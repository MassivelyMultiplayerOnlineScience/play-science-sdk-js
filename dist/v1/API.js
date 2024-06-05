var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { interpolateTemplate } from '../lib/tools';
import MinigamesApiModule from './modules/MinigamesApiModule';
import MMOSApiModule from './modules/MMOSApiModule';
import PlayersApiModule from './modules/PlayersApiModule';
import RewardsApiModule from './modules/RewardsApiModule';
import ServiceApiModule from './modules/ServiceApiModule';
var Api = /** @class */ (function () {
    function Api() {
    }
    Object.defineProperty(Api, "GET", {
        get: function () { return 'GET'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api, "POST", {
        get: function () { return 'POST'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "host", {
        get: function () { return this._host; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "gameCode", {
        get: function () { return this._gameCode; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "gameVersion", {
        get: function () { return this._gameVersion; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "idToken", {
        get: function () { return this._idToken; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Api.prototype, "httpRequestCallback", {
        get: function () { return this._httpRequestCallback; },
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
        this._minigames = new MinigamesApiModule(this);
        this._mmos = new MMOSApiModule(this);
        this._players = new PlayersApiModule(this);
        this._rewards = new RewardsApiModule(this);
        this._service = new ServiceApiModule(this);
        var host = options.host, gameVersion = options.gameVersion, gameCode = options.gameCode, httpRequestCallback = options.httpRequestCallback;
        this._host = host;
        this._gameVersion = gameVersion;
        this._gameCode = gameCode;
        this._httpRequestCallback = httpRequestCallback;
    };
    Api.prototype.errorToString = function (response) {
        var _a, _b;
        return "ERR ".concat(response === null || response === void 0 ? void 0 : response.status, ": ").concat((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.message);
    };
    Api.prototype.buildRequest = function (idToken, options) {
        var url = options.url;
        var parameters = options.parameters, method = options.method, data = options.data;
        var params = __assign({}, parameters);
        params.gameVersion = this._gameVersion;
        params.gameCode = this._gameCode;
        url = interpolateTemplate(url, params);
        var queryString = "gameCode=".concat(params.gameCode, "&gameVersion=").concat(params.gameVersion);
        url += (!url.includes('?')) ? '?' : '&';
        url += queryString;
        url = "".concat(this._host, "/").concat(url);
        return {
            url: url,
            method: method || Api.GET,
            headers: {
                Authorization: "Bearer ".concat(idToken),
                'content-type': 'application/json'
            },
            data: data
        };
    };
    Api.prototype.request = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var httpOptions, requestOptions, callOptions;
            return __generator(this, function (_a) {
                httpOptions = options.httpOptions, requestOptions = options.requestOptions;
                callOptions = httpOptions;
                if (!callOptions)
                    callOptions = this.buildRequest(this.idToken, requestOptions);
                return [2 /*return*/, this.httpRequestCallback(callOptions)];
            });
        });
    };
    Api.prototype.responseValidator = function (response, acceptedStatusCode) {
        if (acceptedStatusCode === void 0) { acceptedStatusCode = 200; }
        if (!response || !response.data || !response.data.body || response.status !== acceptedStatusCode) {
            throw new Error("[Error ".concat(response.status, "]: ").concat(response.data.message));
        }
    };
    return Api;
}());
export default Api;
//# sourceMappingURL=Api.js.map