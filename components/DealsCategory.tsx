"use client"
import React from 'react'
import { useState } from "react";
import BadgeRadio from "@/components/ui/BadgeRadio";
import {DealsCategory as badges} from "@/context/data";
import { setSelectedBadge } from '@/store/slices/selectedBadgeSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectSelectedBadge } from '@/store/selectors/selectedBadgeSelector';

const DealsCategory = () => {
    const selectedBadge = useSelector(selectSelectedBadge);
    const dispatch = useAppDispatch();

    if(!badges){
        return <div>Error in fetching Deals categories data</div>
    }

    const handleBadgeChange = (value: string) => {
        dispatch(setSelectedBadge(value));
        setSelectedBadge(value);
    };
    return (
        <div className="max-w-4xl flex flex-wrap items-start justify-center gap-1 py-4">
            {badges.map((badge) => (
                <BadgeRadio
                    key={badge}
                    label={badge}
                    name="badge"
                    value={badge}
                    checked={selectedBadge === badge}
                    onChange={handleBadgeChange}
                />
            ))}
        </div>
    )
}

export default DealsCategory
