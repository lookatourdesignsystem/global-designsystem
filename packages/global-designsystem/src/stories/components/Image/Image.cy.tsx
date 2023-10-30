import { mount } from "@cypress/react";
import { Image } from ".";
import Image01Png from "../../../assets/images/wreck_league_1.png";
import Image01Webp from "../../../assets/images/wreck_league_1.webp";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Image width={300} src={Image01Png} />);
  });

  it("Image 컴포넌트가 렌더링됩니다.", () => {
    cy.get("img").should("be.exist");
  });

  it("Image 컴포넌트는 'Image' 클래스를 갖습니다.", () => {
    cy.get("img").should("have.class", "Image");
  });

  it("Image 컴포넌트는 기본 loading 'eager' 값을 갖습니다.", () => {
    cy.get("img").should("have.attr", "loading", "eager");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Image
        width={300}
        height={100}
        src={Image01Png}
        sources={[{ srcSet: Image01Webp, type: "webp" }]}
        radius={30}
        className="customClassName"
        alt="alt입니다"
        lazy
      />
    );
  });

  it("'customClassName' 클래스를 갖습니다.", () => {
    cy.get("img").should("have.class", "customClassName");
  });
  it("loading 'lazy' 값을 갖습니다.", () => {
    cy.get("img").should("have.attr", "loading", "lazy");
  });
  it("height '100' 값을 갖습니다.", () => {
    cy.get("img").should("have.attr", "height", "100");
  });
  it("alt 'alt입니다' 값을 갖습니다.", () => {
    cy.get("img").should("have.attr", "alt", "alt입니다");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onErrorSpy = cy.spy().as("onErrorSpy");
    mount(<Image width={300} src={""} onError={onErrorSpy} />);
  });

  it("src가 유효하지 않은면 '@onErrorSpy'함수가 호출됩니다.", () => {
    cy.get("@onErrorSpy").should("have.been.called.with", 1);
  });
});
