import React from 'react';
import InputElement from './InputElement';
import FormItem from './FormItem';

function Date() {
  return (
    <FormItem className="date">
      <summary>Date du poste</summary>
      <InputElement inputType="radio" target="last" name="date">
        Dernière heure
      </InputElement>
      <InputElement inputType="radio" target="24" name="date">
        24 dernières heures
      </InputElement>
      <InputElement inputType="radio" target="week" name="date">
        Les 7 derniers jours
      </InputElement>
      <InputElement inputType="radio" target="2week" name="date">
        Les 14 derniers jours
      </InputElement>
      <InputElement inputType="radio" target="month" name="date">
        30 derniers jours
      </InputElement>
      <InputElement inputType="radio" target="all" name="date">
        Tout
      </InputElement>
    </FormItem>
  );
}

export default Date;
