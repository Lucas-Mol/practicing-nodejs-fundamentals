class ThingUtils {
  static hasOriginFromBody(requestBody) {
    return !!requestBody.origin;
  }

  static mergeThingAndOrigin(thing, origin) {
    return {
      ...thing,
      origin: {
        ...origin
      }
    };
  }
}

export default ThingUtils;