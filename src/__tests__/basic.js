import Daemon from '../daemon';
import { getBuffer } from '../ArrayBuffer';
import ArrayBufferConverter from '../ArrayBuffer';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  it('should set the buffer when loaded', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toEqual(buffer);
  });

  it('should throw an error if buffer is not loaded when calling toString()', () => {
    expect(() => converter.toString()).toThrow('ArrayBuffer is not loaded.');
  });

  it('should convert the loaded buffer to string', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(typeof result).toBe('string');
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});

describe('Daemon', () => {
  it('should create Daemon', () => {
    const daemon = new Daemon('Nancy');
    expect(daemon.name).toBe('Nancy');
  });

  it('should return stoned status', () => {
    const daemon = new Daemon('Nancy');
    expect(daemon.stoned).toBeFalsy();
    daemon.stoned = true;
    expect(daemon.stoned).toBeTruthy();
  });

  it('should set proper attack value considering distance and stoned status', () => {
    const daemon = new Daemon('Nancy');

    daemon.distance = 1;
    daemon.stoned = false;
    expect(daemon.attack).toBe(10);

    daemon.distance = 2;
    daemon.stoned = true;
    expect(daemon.attack).toBe(0);

    daemon.distance = 3;
    daemon.stoned = false;
    expect(daemon.attack).toBe(2);
  });

  it('should set new attack value', () => {
    const daemon = new Daemon('Nancy');
    daemon.attack = 20;
    expect(daemon.attack).toBe(Infinity);
  });

  it('should set proper stoned status', () => {
    const daemon = new Daemon('Nancy');
    expect(daemon.stoned).toBeFalsy();
    daemon.stoned = true;
    expect(daemon.stoned).toBeTruthy();
  });
});
