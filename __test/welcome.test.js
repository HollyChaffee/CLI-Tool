const chalkAnimation = require('chalk-animation');
const chalkAnimation = require('chalk-animation'); //import required for test
const welcome = require('./welcome'); //file required to mock

//setting up mock to mock karoke function
jest.mock('chalk-animation', () => ({
    karaoke: jest.fn()
  }),{ virtual: true });

//return an object with a 'stop' method and ensure stop method is called after welcome function is executed
  describe('welcome', () => {
    test('should stop karaokeTitle animation', async () => {
      const stopMock = jest.fn(); 
      chalkAnimation.karaoke.mockReturnValue({ stop: stopMock });
  
      await welcome();
  
      expect(stopMock).toHaveBeenCalled();
    });
  });
  
  


