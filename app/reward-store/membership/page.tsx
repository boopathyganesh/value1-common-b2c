'use client'
import { planDetails } from '@/context/data';
import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PlanCard from './PlanCard';



const MembershipPage = () => {

  return (
    <main className="flex flex-col text-secondary items-center justify-center gap-5 mt-10">
      <section className='max-w-6xl w-full h-full flex flex-col items-center justify-start'>
        <h1 className='text-4xl font-medium max-w-3xl w-full text-center'>Choose the plan that fits your needs</h1>
        <Tabs defaultValue="monthly" className="w-full py-10">
          <TabsList className='flex items-center justify-center w-full'>
            <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
            <TabsTrigger value="annual">Annual Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <div className='w-full flex items-center justify-center my-10 gap-5'>
              {planDetails.map((plan, index) => (
                <PlanCard key={index} plan={plan.plan} price={plan.price} description={plan.description} features={plan.features} promote={plan.promote} type="monthly" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="annual">
            <div className='flex items-center justify-center my-10 gap-5'>
              {planDetails.map((plan, index) => (
                <PlanCard key={index} plan={plan.plan} price={plan.price} description={plan.description} features={plan.features} promote={plan.promote} type="yearly" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>

  )
}

export default MembershipPage
