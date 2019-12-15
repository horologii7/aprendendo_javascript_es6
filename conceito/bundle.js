"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1a questao
var User =
/*#__PURE__*/
function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin || false;
    }
  }]);

  return User;
}();

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(email, password) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, password));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var user1 = new User('teste@email.com', '123456');
var adm1 = new Admin('testeAdm@email.com', '123456');
console.log(user1.isAdmin());
console.log(adm1.isAdmin()); // 2a questao

var usuarios2 = [{
  nome: 'Ruan',
  idade: 27,
  empresa: 'Horologii'
}, {
  nome: 'Lucas',
  idade: 25,
  empresa: 'Horologii'
}, {
  nome: 'Rafael',
  idade: 32,
  empresa: 'CasaVillar'
}]; // 2.1

var mapIdade = usuarios2.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(mapIdade); // 2.2

var filterHorologii = usuarios2.filter(function (_ref2) {
  var empresa = _ref2.empresa;
  return empresa === 'Horologii';
});
console.log(filterHorologii); // 2.3

var findGoogle = usuarios2.find(function (_ref3) {
  var empresa = _ref3.empresa;
  return empresa === 'Google';
});
console.log(findGoogle); // 2.4

var multIdadeUsers = usuarios2.map(function (item) {
  item.idade = item.idade * 2;
  return item;
}).filter(function (_ref4) {
  var idade = _ref4.idade;
  return idade <= 50;
});
console.log(multIdadeUsers); // 3a questao
// 3.1

var arr3 = [1, 2, 3, 4, 5];
arr3.map(function (item) {
  return item + 10;
}); // 3.2

var usuario3 = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade3 = function mostraIdade3(_ref5) {
  var idade = _ref5.idade;
  return idade;
};

console.log(mostraIdade3(usuario3)); // 3.3

var nome3 = "Diego";
var idade3 = 23;

var mostraUsuario3 = function mostraUsuario3() {
  var nome3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome3: nome3,
    idade3: idade3
  };
};

console.log(mostraUsuario3(nome3, idade3));
console.log(mostraUsuario3(nome3)); // 3.4

var promise3 = function promise3() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

promise3().then(function () {
  return console.log("Entrou");
})["catch"](function () {
  return console.log("Não entrou");
}); // 4a questao
// 4.1

var empresa4 = {
  nome4: 'Horologii',
  endereco4: {
    cidade4: 'Fortaleza',
    estado4: 'CE'
  }
};
var nome4 = empresa4.nome4,
    _empresa4$endereco = empresa4.endereco4,
    cidade4 = _empresa4$endereco.cidade4,
    estado4 = _empresa4$endereco.estado4;
console.log(nome4);
console.log(cidade4);
console.log(estado4); // 4.2

var mostraInfo4 = function mostraInfo4(usuario4) {
  var nome4 = usuario4.nome4,
      idade4 = usuario4.idade4;
  return "".concat(nome4, " tem ").concat(idade4, " anos.");
};

console.log(mostraInfo4({
  nome4: 'Ruan',
  idade4: 27
})); // 5a questao
// 5.1

var arr5 = [1, 2, 3, 4, 5, 6];
var x5 = arr5[0],
    y5 = arr5.slice(1);
console.log(x5);
console.log(y5);

var soma5 = function soma5() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(soma5(1, 2, 10)); // 5.2

var usuario5 = {
  nome5: 'Ruan',
  idade5: 27,
  endereco5: {
    cidade5: 'Fortaleza',
    uf5: 'CE',
    pais5: 'Brasil'
  }
};

var usuario52 = _objectSpread({}, usuario5, {
  nome5: 'Lucas'
});

var usuario53 = _objectSpread({}, usuario5, {
  endereco5: _objectSpread({}, usuario5.endereco5, {
    cidade5: 'Caucaia'
  })
});

console.log(usuario52);
console.log(usuario53); // 6a questao

var usuario6 = 'Ruan';
var idade6 = 27;
console.log("O usu\xE1rio ".concat(usuario6, " possui ").concat(idade6, " anos")); // 7a questao

var nome7 = 'Ruan';
var idade7 = 27;
var usuario7 = {
  nome7: nome7,
  idade7: idade7,
  cidade7: 'Fortaleza'
};
console.log(usuario7);
