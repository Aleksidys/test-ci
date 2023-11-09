
import Validator from '../regex';

describe("Validator", () => {
  describe("validateUsername", () => {
    it("should return true if the username is valid", () => {
      const validUsername = "my_username123";
      const isValid = Validator.validateUsername(validUsername);
      expect(isValid).toBe(true);
    });

    it("should return false if the username contains invalid characters", () => {
      const invalidUsername = "user*name";
      const isValid = Validator.validateUsername(invalidUsername);
      expect(isValid).toBe(false);
    });

    it("should return false if the username contains more than three consecutive digits", () => {
      const invalidUsername = "user1234";
      const isValid = Validator.validateUsername(invalidUsername);
      expect(isValid).toBe(false);
    });

    it("should return false if the username starts or ends with a digit, underscore, or hyphen", () => {
      const invalidUsername1 = "_username";
      const invalidUsername2 = "username-";
      const invalidUsername3 = "1username";
      const isValid1 = Validator.validateUsername(invalidUsername1);
      const isValid2 = Validator.validateUsername(invalidUsername2);
      const isValid3 = Validator.validateUsername(invalidUsername3);
      expect(isValid1).toBe(false);
      expect(isValid2).toBe(false);
      expect(isValid3).toBe(false);
    });
  });
});