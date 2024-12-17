'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Plus } from 'lucide-react';
import { useForm } from "react-hook-form";
import { UserSchema, UserDefaultValues } from '@/src/form-schema/user'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

export default function Home() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const users = [
    {
      id: 100,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.d@gmail.com'
    },
    {
      id: 101,
      firstName: 'Kevin',
      lastName: 'Williams',
      email: 'kevin.w@gmail.com'
    }
  ]
  return (
    <div className="m-4 space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Button onClick={() => setSheetOpen(!sheetOpen)}><Plus className="w-4 h-4" /> Add User</Button>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              users.map((object: any) => (
                <TableRow key={object.id}>
                  <TableCell>{object.firstName}</TableCell>
                  <TableCell>{object.lastName}</TableCell>
                  <TableCell>{object.email}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
      <AddUserSheet open={sheetOpen} setOpen={setSheetOpen} />
    </div>
  );
}

export function AddUserSheet({ open, setOpen }: { open: boolean, setOpen: (value: boolean | ((prev: boolean) => boolean)) => void }) {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      ...UserDefaultValues
    },
  })
  const { reset, clearErrors } = form

  function onSubmit(data: z.infer<typeof UserSchema>) {
    console.log(data)
  }

  const handleSheetOpen = () => {
    setOpen(!open)
    clearErrors()
  }

  return (
    <Sheet open={open} onOpenChange={handleSheetOpen}>
      <SheetContent className="md:max-w-md">
        <SheetHeader>
          <SheetTitle>Add User</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 h-full space-y-2">
            <FormField name="firstName" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel isRequired>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="lastName" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel isRequired>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel isRequired>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <SheetFooter>
              <SheetClose className={cn(buttonVariants({ variant: 'outline' }))}>Cancel</SheetClose>
              <Button type="submit">Submit</Button>
            </SheetFooter>
          </form>
        </Form>

      </SheetContent>
    </Sheet>
  )
}
