import winston from 'winston'

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  assert: jest.fn(),
  clear: jest.fn(),
  count: jest.fn(),
  debug: jest.fn(),
  countReset: jest.fn(),
  Console: jest.fn(),
  dir: jest.fn(),
  dirxml: jest.fn(),
  group: jest.fn(),
  groupCollapsed: jest.fn(),
  groupEnd: jest.fn(),
  profile: jest.fn(),
  profileEnd: jest.fn(),
  table: jest.fn(),
  time: jest.fn(),
  timeEnd: jest.fn(),
  timeLog: jest.fn(),
  timeStamp: jest.fn(),
  trace: jest.fn(),
  warn: jest.fn(),
  markTimeline: jest.fn(),
  timeline: jest.fn(),
  timelineEnd: jest.fn(),
}
beforeAll(() => {
  const oneMinute = 1000 * 60
  jest.setTimeout(oneMinute)
  winston.remove(winston.transports.Console)
})

afterEach(() => {
  jest.clearAllMocks()
})
