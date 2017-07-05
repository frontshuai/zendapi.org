import "./EnumSection.scss";
import React from "react";

export default class EnumSection extends React.Component
{
   render()
   {
      let enums = this.props.enums;
      return <div className={enums.length != 0 ? "enum-section-container" : "uk-hidden"}>
         <h3>枚举类型列表</h3>
         {enums.map((item, index) =>
            <div className="uk-grid-small list-item" data-uk-grid key = {"enumsection"+index}>
               <div className="uk-width-1-1 uk-width-1-4@s">
                  <a className="uk-text-break" href = {item.url}>{item.name}</a>
               </div>
               <div className="uk-width-1-1 uk-width-3-4@s"><span>{item.briefDescription}</span></div>
            </div>
         )}
      </div>;
   }
};