'use client'
import React, { FormEvent, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '../ui/checkbox'
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite'
import { db, firestore } from '../../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

const grades = [
  {
    name: 'H13',
    value: 'h13',
  },
  {
    name: 'D2',
    value: 'd2',
  },
  {
    name: 'S7',
    value: 's7',
  },
  {
    name: 'A2',
    value: 'a2',
  },
  {
    name: 'M2',
    value: 'm2',
  },
  {
    name: 'M1',
    value: 'm1',
  },
  {
    name: 'M35',
    value: 'm35',
  },
  {
    name: 'M42',
    value: 'm42',
  },
  {
    name: 'T - Series',
    value: 't-series',
  },
  {
    name: 'Mixed',
    value: 'mixed',
  },
  {
    name: 'Tungsten Carbide',
    value: 'tungsten-carbide',
  },
  {
    name: 'Alloy Steel',
    value: 'alloy-steel',
  },
  {
    name: 'Others',
    value: 'others',
  },
]

const Form = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }

    let newData: any = {
      h13: [],
      d2: [],
      s7: [],
      a2: [],
      m2: [],
      m1: [],
      m35: [],
      m42: [],
      tseries: [],
      mixed: [],
      tungstencarbide: [],
      alloysteel: [],
      others: [],
    }

    for (const grade of grades) {
      const gradeValue = grade.value
      const gradeData: any = {
        scrapTypes: [],
      }

      //   // Initialize an array to store checkbox values for the current grade
      //   const checkboxValues = []

      // Iterate through the types of scrap (solids, turnings, grindings, sludge)
      for (const scrapType of ['solids', 'turnings', 'grindings', 'sludge']) {
        // Check if the checkbox for the current grade and scrap type is checked
        const checkboxId = `${scrapType}-${gradeValue}`
        // const isChecked = event.target.querySelector(`#${checkboxId}`).checked
        const checkboxElement = event.target.elements[checkboxId]
        const isChecked =
          checkboxElement.getAttribute('aria-checked') === 'true'

        // If checked, add the scrap type to the array
        if (isChecked) {
          gradeData.scrapTypes.push(scrapType)
          //   checkboxValues.push(scrapType)
          const quantityInputId = `quantity-${gradeValue}`
          const quantity = event.target.elements[quantityInputId].value || ''
          gradeData.quantities = quantity
        }
      }

      // Add the array of checkbox values to newData with the grade as the key
      newData[gradeValue] = gradeData
    }

    newData = {
      ...newData,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      sentAt: Timestamp.now().toDate(),
    }
    console.log(newData)

    try {
      const ref = collection(db, 'contact')
      await addDoc(ref, newData)
      console.log('Document written successfully: ')
      return 0
    } catch (error) {
      console.error('Error adding document: ', error)
      return -1
    }
    // for (const key in newData) {
    //   console.log(key)
    //   const element = newData[key]
    // const value = event.target[key + '-quantity'].value
    // const grade = `${key}[]`
    // for (const el of event.target[`${key}`]) {

    // if (el.checked) {
    // element.push(el.value)
    // }
    // }
    // }

    // console.log(newData)
    // console.log(formData)
  }

  return (
    <div
      id="contact"
      className="mb-8 scroll-m-28 relative bg-white bg-cover container max-w-5xl lg:-mt-28 px-0 border-accent border-4"
    >
      <div className="relative mx-auto px-4 py-16 lg:px-8">
        <div className="space-y-16 lg:px-14 xl:px-20">
          {/* Heading */}
          <div>
            <h2 className="font-titillium mb-4 text-4xl font-bold text-black dark:text-white">
              Get a Quote
            </h2>
            <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />
            <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              We always love to hear from you.
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <Table className="overflow-x-auto">
              <TableCaption>
                In the table above, please select the type of scrap you have and
                the quantity you want to sell. We will get back to you with the
                best price possible
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Grade</TableHead>
                  <TableHead className="w-[60px]">Solids</TableHead>
                  <TableHead className="w-[60px]">Turnings</TableHead>
                  <TableHead className="w-[60px]">Grindings</TableHead>
                  <TableHead className="w-[60px]">Sludge</TableHead>
                  <TableHead className="w-[100px]">Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grades.map((grade, index) => (
                  <TableRow key={index}>
                    <TableCell>{grade.name + ' Scrap'}</TableCell>
                    <TableCell>
                      <Checkbox
                        id={`solids-${grade.value}`}
                        name={`${grade.value}[]`}
                        value={`solids`}
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id={`turnings-${grade.value}`}
                        name={`${grade.value}[]`}
                        value={`turnings`}
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id={`grindings-${grade.value}`}
                        name={`${grade.value}[]`}
                        value={`grindings`}
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id={`sludge-${grade.value}`}
                        name={`${grade.value}[]`}
                        value={`sludge`}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        id={`quantity-${grade.value}`}
                        name={`${grade.value}-quantity`}
                        placeholder="100 kgs"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="space-y-1">
              <Label htmlFor="name" className="font-medium">
                First Name
              </Label>
              <Input required id="name" name="name" placeholder="John" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="name@company.com"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                defaultValue={''}
                placeholder="Your message here"
              />
            </div>
            <Button type="submit" size="lg">
              <span>Send Message</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
