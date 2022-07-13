class CanvassaException extends Error {
  constructor(status, messages_) {
    let messages = messages_;
    if (typeof messages === "string") messages = [messages_];

    super(messages[0]);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.status = status;
    this.messages = messages;

    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    //  @see Node.js reference (bottom)
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CanvassaException;
