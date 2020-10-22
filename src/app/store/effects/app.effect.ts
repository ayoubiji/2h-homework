import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppEffect {
  public apiUrl = "";

  constructor(protected httpClient: HttpClient) {}

  get$(url: string, params: any = null) {
    if (params) {
      let Params = new HttpParams();

      const realKeys = Object.keys(params);
      const paramKeys = Object.keys(params);

      Params = this.buildGetParams(realKeys, paramKeys, params, Params);

      return this.httpClient.get(url, {
        params: Params,
      });
    }
    return this.httpClient.get(url);
    // .catch(res => {
    //   console.log(res);
    // });
  }

  post$(url: string, payload: any, options = {}) {
    return this.httpClient.post(url, payload, options);
    // .catch(res => {
    //   console.log(res);
    // });
  }

  delete$(url: string, payload: any) {
    return this.httpClient.delete(url, payload);
  }

  private buildGetParams(
    realKeys: Array<string>,
    paramKeys: Array<string>,
    values: any,
    httpParams: HttpParams
  ): HttpParams {
    realKeys.forEach((paramName, index) => {
      if (typeof values[paramName] === "object") {
        const recursiveRealKeys = Object.keys(values[paramName]);
        const recursiveParamKeys = Object.keys(values[paramName]).map(
          (subParamName) => paramKeys[index] + "[" + subParamName + "]"
        );
        httpParams = this.buildGetParams(
          recursiveRealKeys,
          recursiveParamKeys,
          values[paramName],
          httpParams
        );
      } else {
        httpParams = httpParams.set(paramKeys[index], values[paramName]);
      }
    });

    return httpParams;
  }
}
