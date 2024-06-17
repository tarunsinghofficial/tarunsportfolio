import React from "react";
import skillsData from "../static/skills.js";
import {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  MysqlOriginal,
  MongodbOriginal,
  PythonOriginal,
  GithubOriginal,
  GitOriginal,
  FigmaOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  GraphqlPlain,
  SqldeveloperOriginal,
  JiraOriginal,
  TailwindcssOriginal,
  ExpressOriginal,
  SlackPlain,
  PostmanOriginal,
  Html5Original,
  COriginal,
  PrismaOriginal,
} from "devicons-react";
import { FaAward } from "react-icons/fa";

const iconComponents = {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  MysqlOriginal,
  MongodbOriginal,
  PythonOriginal,
  GithubOriginal,
  GitOriginal,
  FigmaOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  GraphqlPlain,
  SqldeveloperOriginal,
  JiraOriginal,
  TailwindcssOriginal,
  ExpressOriginal,
  SlackPlain,
  PostmanOriginal,
  Html5Original,
  COriginal,
  PrismaOriginal,
  FaAward
};

function Skills() {
  return (
    <section className="py-[80px] w-[100%]">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">Skills</h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="flex flex-col gap-10 py-[80px]">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="flex h-full w-[100%] flex-col items-center sm:items-start justify-center gap-3 rounded-[5px] bg-[#18191E] p-[30px]"
          >
            <div className="text-lg sm:text-2xl font-bold">
              {category.title}
            </div>
            <div className="grid grid-cols-2 place-items-center items-start flex-row flex-wrap sm:items-center justify-start gap-3 sm:flex md:gap-5">
              {category.skills.map((skill, idx) => {
                const IconComponent = iconComponents[skill.icon];
                return (
                  <div key={idx} className="flex items-center space-x-2">
                    {IconComponent ? (
                      <>
                        <IconComponent className="text-2xl" />
                        <span>{skill.name}</span>
                      </>
                    ) : (
                      <span className="text-red-500">Icon not found</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
