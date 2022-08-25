import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseColour, chooseYear, chooseName,  } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    colour: string;
    make: string;
    model: string;
    name: string;
    year: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<CarState>(state => state.name);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event: any) => {
        console.log(props.id)
        if (props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseColour(data.colour));
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseName(data.name));
            dispatch(chooseYear(data.year));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Car Name</label>
                <Input {...register('name')} name="name" placeholder='Name'/>
            </div>
            <div>
                <label htmlFor="colour">Colour</label>
                <Input {...register('colour')} name="colour" placeholder='Colour'/>
            </div>
            <div>
                <label htmlFor="make">Make</label>
                <Input {...register('make')} name="make" placeholder='Make'/>
            </div>
            <div>
                <label htmlFor="Model">Model</label>
                <Input {...register('model')} name="model" placeholder='Model'/>
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <Input {...register('year')} name="year" placeholder='Year'/>
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    </div>
)
}