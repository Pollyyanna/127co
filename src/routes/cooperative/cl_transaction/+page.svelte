<script lang="ts">
    import { Search, Button } from "flowbite-svelte";
    import Table from "$lib/components/Table.svelte";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  
    import type { PageServerData } from "./$types";
    import { clTransactionHeaders as headers } from "$lib/headers";
  
    export let data: NonNullable<PageServerData>;
  
    let rows = data["clTransaction"];
  
    const handleEdit = async (id: number) => {
      await fetch(
        "/cooperative/api/database/edit", {
          method: "POST",
          body: JSON.stringify({
            id,
            table: "CL_Transaction"
          })
        });
    };
  
    const handleDelete = async (id: number) => {
      await fetch(
        "/cooperative/api/database/delete", {
          method: "POST",
          body: JSON.stringify({
            id,
            table: "CL_Transaction"
          })
        });
    };
  </script>
  
  <main class="w-full">
    <Breadcrumb
      items={[
        { href: "/cooperative", text: "Cooperative" },
        { href: "/cooperative/cl_transaction", text: "Loan Transactions" },
      ]}
    />

    <Search class="mb-8">
      <Button class="bg-activeb">Search</Button>
    </Search>
  
    <div class="ml-9 mb-20">
      <span class="text-xl mb-40 text-center font-bold"
        >No exact match found.</span
      >
    </div>

    <a
      href="/cooperative/cl_transaction/add"
      class="bg-buttonp rounded-lg z-4 border-2 w-40 border-outline p-3 mb-4 flex items-center hover:bg-buttonphover active:bg-buttonpactive"
    >
      <span class="text-3xl material-symbols-outlined mr-2"> add </span>
      <div class="flex flex-col h-full">
        <span>Add an Entry</span>
      </div>
    </a>
    <Table
      primaryKey="CLTransaction_ID"
      {headers}
      {rows}
      {handleEdit}
      {handleDelete}
    />
  </main>
  