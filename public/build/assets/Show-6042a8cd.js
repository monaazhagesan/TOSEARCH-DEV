import{A as i}from"./AppLayout-ffad2fd9.js";import o from"./DeleteTeamForm-764f45d9.js";import{S as r}from"./SectionBorder-147cce96.js";import l from"./TeamMemberManager-a211e82c.js";import n from"./UpdateTeamNameForm-80e3342a.js";import{o as a,c,w as s,a as m,b as t,d as p,F as d,e as u}from"./app-a9ec9377.js";import"./collapseMotion-cc415b30.js";import"./index-80196c43.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-ea53e471.js";import"./SectionTitle-f4cc5261.js";import"./ConfirmationModal-0be103f0.js";import"./DangerButton-17dd2e71.js";import"./SecondaryButton-a324488e.js";import"./ActionMessage-21280f3e.js";import"./DialogModal-17b78625.js";import"./FormSection-7fab2c12.js";import"./TextInput-9fc27357.js";import"./InputLabel-b4028a37.js";import"./PrimaryButton-78c7ef01.js";const f=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},L={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[f]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):u("",!0)])])]),_:1}))}};export{L as default};
