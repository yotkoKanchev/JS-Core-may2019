class Console {

    static get placeholder() {
      return /{\d+}/g;
    }
  
    static writeLine() {
      let message = arguments[0];
      if (arguments.length === 1) {
        if (typeof (message) === 'object') {
          message = JSON.stringify(message);
          return message;
        }
        else if (typeof(message) === 'string') {
          return message;
        }
      }
      else {
        if (typeof (message) !== 'string') {
          throw new TypeError("No string format given!");
        }
        else {
          let tokens = message.match(this.placeholder).sort(function (a, b) {
            a = Number(a.substring(1, a.length - 1));
            b = Number(b.substring(1, b.length - 1));
            return a - b;
          });
          if (tokens.length !== (arguments.length - 1)) {
            throw new RangeError("Incorrect amount of parameters given!");
          }
          else {
            for (let i = 0; i < tokens.length; i++) {
              let number = Number(tokens[i].substring(1, tokens[i].length - 1));
              if (number !== i) {
                throw new RangeError("Incorrect placeholders given!");
              }
              else {
                message = message.replace(tokens[i], arguments[i + 1])
              }
            }
            return message;
          }
        }
      }
    }
  };

  console.log(Console.writeLine('az'));
  
//   let console = new Console();
//   console.log(console.writeline('az'))
//   console.log(console.placeholder('{3}'));
//   let expect = require("chai").expect;

//   describe('test Console class', () => {
//       describe('placeholder gets correctly', () => {
//           let console = new Console();
//           let actual = console.placeholder('{999}');
//           let expected = true;
//           expect(actual).to.be.equal(expected, 'getter does not work fine')
//       })
//   })

