var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Kris';
    var text = 'Hello world!';
    var message = generateMessage(from, text);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Kris';
    var latitude = '10';
    var longitude = '20';
    var url = "https://www.google.com/maps/?q=10,20"
    var message = generateLocationMessage(from, latitude, longitude);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url
    });
  });
});